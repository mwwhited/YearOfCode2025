#include <Arduino.h>
#include <SD.h>

const uint8_t PIN_BUSY   = 10;
const uint8_t PIN_ACK    = 9;
const uint8_t PIN_STROBE = 0;
const uint8_t DATA_PINS[8] = {1,2,3,4,5,6,7,8};

const size_t BUFFER_SIZE = 100 * 1024; // 100kB
uint8_t dataBuffer[BUFFER_SIZE];
size_t bufferIndex = 0;

unsigned long lastStrobeTime = 0;
bool lastStrobe = HIGH;

const int SD_CS_PIN = 4; // Change to your SD card CS pin

void setup() {
  pinMode(PIN_BUSY, OUTPUT);
  pinMode(PIN_ACK, OUTPUT);
  digitalWrite(PIN_BUSY, LOW);  // Ready (LOW)
  digitalWrite(PIN_ACK, HIGH);  // Normally HIGH

  pinMode(PIN_STROBE, INPUT_PULLUP);

  for (uint8_t i = 0; i < 8; i++) {
    pinMode(DATA_PINS[i], INPUT);
  }

  Serial.begin(115200);

  if (!SD.begin(SD_CS_PIN)) {
    Serial.println("SD init failed!");
    while (1);
  }
  Serial.println("SD init OK");
}

void writeBufferToFile() {
  char filename[20];
  snprintf(filename, sizeof(filename), "/data%lu.bin", millis());
  File file = SD.open(filename, FILE_WRITE);
  if (file) {
    file.write(dataBuffer, bufferIndex);
    file.close();
    Serial.print("Wrote ");
    Serial.print(bufferIndex);
    Serial.print(" bytes to ");
    Serial.println(filename);
  } else {
    Serial.println("Failed to open file for writing!");
  }
  bufferIndex = 0;
}

void loop() {
  bool strobe = digitalRead(PIN_STROBE);

  // Detect falling edge
  if (lastStrobe == HIGH && strobe == LOW) {
    // Raise Busy HIGH
    digitalWrite(PIN_BUSY, HIGH);

    // Wait 5ms
    delay(5);

    // Read data pins into buffer if space
    if (bufferIndex < BUFFER_SIZE) {
      uint8_t data = 0;
      for (uint8_t i = 0; i < 8; i++) {
        if (digitalRead(DATA_PINS[i])) {
          data |= (1 << i);
        }
      }
      dataBuffer[bufferIndex++] = data;
    }

    // Pull Ack LOW for 2ms
    digitalWrite(PIN_ACK, LOW);
    delay(2);
    digitalWrite(PIN_ACK, HIGH);

    // Lower Busy
    digitalWrite(PIN_BUSY, LOW);

    lastStrobeTime = millis();
  }

  // If 500ms have passed since last strobe and buffer has data, write to file
  if (bufferIndex > 0 && (millis() - lastStrobeTime > 500)) {
    writeBufferToFile();
  }

  lastStrobe = strobe;
}