const fs = require("fs").promises;
const path = require("path");

const QUERY_HISTORY_FILE = path.join(__dirname, "../data/queryHistory.json");

class QueryHistory {
  constructor() {
    this.filePath = QUERY_HISTORY_FILE;
    this.history = [];
    this.loadHistoryFromFile();
  }

  async add(query) {
    this.history.unshift(query);
    await this.saveHistoryToFile();
  }

  async getAll() {
    return this.history;
  }

  async saveHistoryToFile() {
    try {
      await fs.writeFile(this.filePath, JSON.stringify(this.history));
    } catch (error) {
      console.error(`Error saving query history: ${error}`);
    }
  }

  async loadHistoryFromFile() {
    try {
      const fileContent = await fs.readFile(this.filePath, "utf8");
      this.history = JSON.parse(fileContent) || [];
    } catch (error) {
      console.error(`Error loading query history: ${error}`);
    }
  }
}

module.exports = new QueryHistory();
