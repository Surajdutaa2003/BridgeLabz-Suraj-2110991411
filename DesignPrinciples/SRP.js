// Class Definitions
class ReportGenerator {
  constructor(data) {
    this.data = data;
  }

  generate() {
    console.log("Generating Report...");
  }
}

class DatabaseSaver {
  save(report) {
    console.log("Saving report to database...");
  }
}

class EmailSender {
  send(report) {
    console.log("Sending email with report...");
  }
}

// Create objects of each class
const reportData = { title: "Monthly Report", content: "Report Content Here" };

const reportGenerator = new ReportGenerator(reportData);
const databaseSaver = new DatabaseSaver();
const emailSender = new EmailSender();

// Call methods
reportGenerator.generate(); // Generates the report
databaseSaver.save(reportData); // Saves the report to the database
emailSender.send(reportData); // Sends the report via email
