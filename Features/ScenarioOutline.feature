@test
Feature: ScenarioOutline

A short summary of the feature

@add
Scenario Outline: Add two numbers using scenario outline
	Given the first number is <number1>
	And the second number is <number2>
	When the two numbers are added
	Then the result should be <expectedSum>

@positive
Examples: add two positive numbers
	| SN  | number1 | number2 | expectedSum |
	| 101 | 1       | 4       | 5           |
	| 102 | 45      | 60      | 105         |
	| 103 | 20      | 300     | 320         |

@negative
Examples: add two negative numbers
	| SN  | number1 | number2 | expectedSum |
	| 201 | -70     | -40     | -110        |
	| 202 | -45     | -55     | -100        |
	| 203 | -99     | -90     | -189        |



