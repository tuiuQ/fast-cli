import { Command } from "commander"
import pkg from "../package.json"
import { setupCleanCommand } from "./commands/clean"
import { setupSubsetCommand } from "./commands/subset"

const program = new Command("fast")

program.version(pkg.version)

setupCleanCommand(program)
setupSubsetCommand(program)

program.parse(process.argv)
