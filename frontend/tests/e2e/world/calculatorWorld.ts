import { Calculator } from "../src/calculator";
import { World } from "@cucumber/cucumber";

declare module "@cucumber/cucumber" {
    interface World {
        calculator: Calculator;
        actual: number;
    }
}