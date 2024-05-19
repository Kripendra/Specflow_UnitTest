jsonPWrapper ({
  "Features": [
    {
      "RelativeFolder": "Calculator.feature",
      "Feature": {
        "Name": "Calculator",
        "Description": "![Calculator](https://specflow.org/wp-content/uploads/2020/09/calculator.png)\r\nSimple calculator for adding **two** numbers\r\n\r\nLink to a feature: [Calculator](SpecFlowTest/Features/Calculator.feature)\r\n***Further read***: **[Learn more about how to generate Living Documentation](https://docs.specflow.org/projects/specflow-livingdoc/en/latest/LivingDocGenerator/Generating-Documentation.html)**",
        "FeatureElements": [
          {
            "Name": "1 Add two numbers",
            "Slug": "1-add-two-numbers",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the first number is 50",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the second number is 70",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the two numbers are added",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be 120",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@add"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true,
              "WasProvided": true
            }
          },
          {
            "Name": "2 Multiply two numbers",
            "Slug": "2-multiply-two-numbers",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the first number is 50",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the second number is 70",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the two numbers are multiplied",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be 3500",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@multiply"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true,
              "WasProvided": true
            }
          },
          {
            "Name": "3 Add two numbers using data table",
            "Slug": "3-add-two-numbers-using-data-table",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the first and second number are:",
                "TableArgument": {
                  "HeaderRow": [
                    "Number1",
                    "Number2"
                  ],
                  "DataRows": [
                    [
                      "50",
                      "30"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the two numbers are added",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be 80",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@add"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true,
              "WasProvided": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true,
          "WasProvided": true
        },
        "Tags": [
          "@test"
        ]
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true,
        "WasProvided": true
      }
    },
    {
      "RelativeFolder": "ScenarioOutline.feature",
      "Feature": {
        "Name": "ScenarioOutline",
        "Description": "A short summary of the feature",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "add two positive numbers",
                "TableArgument": {
                  "HeaderRow": [
                    "SN",
                    "number1",
                    "number2",
                    "expectedSum"
                  ],
                  "DataRows": [
                    [
                      "101",
                      "1",
                      "4",
                      "5",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true,
                        "WasProvided": true
                      }
                    ],
                    [
                      "102",
                      "45",
                      "60",
                      "105",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true,
                        "WasProvided": true
                      }
                    ],
                    [
                      "103",
                      "20",
                      "300",
                      "320",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [
                  "@positive"
                ],
                "NativeKeyword": "Examples"
              },
              {
                "Name": "add two negative numbers",
                "TableArgument": {
                  "HeaderRow": [
                    "SN",
                    "number1",
                    "number2",
                    "expectedSum"
                  ],
                  "DataRows": [
                    [
                      "201",
                      "-70",
                      "-40",
                      "-110",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true,
                        "WasProvided": true
                      }
                    ],
                    [
                      "202",
                      "-45",
                      "-55",
                      "-100",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true,
                        "WasProvided": true
                      }
                    ],
                    [
                      "203",
                      "-99",
                      "-90",
                      "-189",
                      {
                        "WasExecuted": true,
                        "WasSuccessful": true,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [
                  "@negative"
                ],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Add two numbers using scenario outline",
            "Slug": "add-two-numbers-using-scenario-outline",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the first number is <number1>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the second number is <number2>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the two numbers are added",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be <expectedSum>",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@add"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true,
              "WasProvided": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true,
          "WasProvided": true
        },
        "Tags": [
          "@test"
        ]
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true,
        "WasProvided": true
      }
    },
    {
      "RelativeFolder": "ShoppingCart.feature",
      "Feature": {
        "Name": "ShoppingCart",
        "Description": "As a customer \r\nI want to calculate the total price of items in my shopping cart\r\nSo that I know how much I'll be paying",
        "FeatureElements": [
          {
            "Name": "Calculate Total Price of item added in shopping cart",
            "Slug": "calculate-total-price-of-item-added-in-shopping-cart",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the following items are in my shopping cart:",
                "TableArgument": {
                  "HeaderRow": [
                    "Item",
                    "Quantity",
                    "Price"
                  ],
                  "DataRows": [
                    [
                      "Chocolate",
                      "2",
                      "100"
                    ],
                    [
                      "Chips",
                      "1",
                      "50"
                    ],
                    [
                      "Juice",
                      "2",
                      "25"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I calculate the total price",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the total price should be 300",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@shopping",
              "@price"
            ],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true,
              "WasProvided": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true,
          "WasProvided": true
        },
        "Tags": [
          "@test"
        ]
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true,
        "WasProvided": true
      }
    }
  ],
  "Summary": {
    "Tags": [
      {
        "Tag": "@test",
        "Total": 5,
        "Passing": 5,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Tag": "@add",
        "Total": 3,
        "Passing": 3,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Tag": "@multiply",
        "Total": 1,
        "Passing": 1,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Tag": "@shopping",
        "Total": 1,
        "Passing": 1,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Tag": "@price",
        "Total": 1,
        "Passing": 1,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "Folders": [
      {
        "Folder": "Calculator.feature",
        "Total": 3,
        "Passing": 3,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "ScenarioOutline.feature",
        "Total": 1,
        "Passing": 1,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "ShoppingCart.feature",
        "Total": 1,
        "Passing": 1,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "NotTestedFolders": [
      {
        "Folder": "Calculator.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "ScenarioOutline.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "ShoppingCart.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "Scenarios": {
      "Total": 5,
      "Passing": 5,
      "Failing": 0,
      "Inconclusive": 0
    },
    "Features": {
      "Total": 3,
      "Passing": 3,
      "Failing": 0,
      "Inconclusive": 0
    },
    "FoldersWithTestKinds": [
      {
        "Folder": "Calculator.feature",
        "Total": 3,
        "Automated": 3,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "ScenarioOutline.feature",
        "Total": 1,
        "Automated": 1,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "ShoppingCart.feature",
        "Total": 1,
        "Automated": 1,
        "Manual": 0,
        "NotTested": 0
      }
    ]
  },
  "Configuration": {
    "SutName": "SpecflowTest",
    "SutVersion": "v1.0",
    "GeneratedOn": "18 May 2024 15:03:15"
  }
});