from subprocess import call
import time
import os

def main():
    print("How many episodes until shutdown?")
    episodes = int(input())
    for i in range(episodes):
        os.system('cls')
        print(f"Playing episode {i+1} of {episodes}")
        time.sleep(1320) # Length of a half-hour episode, minus commercial time.
        
    call(["shutdown", "/s"])

main()
