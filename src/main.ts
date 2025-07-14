import { Command } from "commander"
import pkg from "../package.json"
import { setupCleanCommand } from "./commands/clean"

const program = new Command("fast")

program.version(pkg.version)

setupCleanCommand(program)

program.parse(process.argv)
