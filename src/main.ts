import { Command } from "commander"
import pkg from "../package.json"

const program = new Command("fast")

program.version(pkg.version)

program.parse(process.argv)
