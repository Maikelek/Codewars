// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

#include <stdbool.h>

bool checkAlive(int health){
  if (health <= 0) {
    return false;
  } else {
    return true;
  }
}