// With ISP: Smaller, more specific interfaces

// Interface for working
class Workable {
  work() {
    console.log("Working...");
  }
}

// Interface for eating
class Eatable {
  eat() {
    console.log("Eating...");
  }
}

// Interface for sleeping
class Sleepable {
  sleep() {
    console.log("Sleeping...");
  }
}

// RobotWorker only implements the "work" method
class RobotWorker extends Workable {
  work() {
    console.log("Robot working...");
  }
}

// HumanWorker implements "work" and "eat"
class HumanWorker extends Workable {
  work() {
    console.log("Human working...");
  }

  eat() {
    console.log("Human eating...");
  }
}

// HumanWorker can also sleep
class HumanWorkerWithSleep extends HumanWorker {
  sleep() {
    console.log("Human sleeping...");
  }
}

// Usage
const robot = new RobotWorker();
robot.work(); // Output: Robot working...

const human = new HumanWorker();
human.work(); // Output: Human working...
human.eat(); // Output: Human eating...

const humanWithSleep = new HumanWorkerWithSleep();
humanWithSleep.sleep(); // Output: Human sleeping...
