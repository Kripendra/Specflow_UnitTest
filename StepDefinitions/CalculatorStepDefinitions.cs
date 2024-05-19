using CalculatorApp;
using NUnit.Framework;
using TechTalk.SpecFlow.Assist;

namespace SpecFlowTest.StepDefinitions
{
    [Binding] // identify this as the step definition without it specflow does not undertand it is a step def
    public sealed class CalculatorStepDefinitions
    {
        // For additional details on SpecFlow step definitions see https://go.specflow.org/doc-stepdef

        private readonly Calculator _calculator = new Calculator();
        private int _result;

        [Given("the first number is (.*)")] // binded to the given step in the feature (Case sensitive)
        public void GivenTheFirstNumberIs(int number)
        {
            //TODO: implement arrange (precondition) logic
            // For storing and retrieving scenario-specific data see https://go.specflow.org/doc-sharingdata
            // To use the multiline text or the table argument of the scenario,
            // additional string/Table parameters can be defined on the step definition
            // method.

            _calculator.FirstNumber = number;

            //throw new PendingStepException();
        }

        [Given("the second number is (.*)")]
        public void GivenTheSecondNumberIs(int number)
        {
            //TODO: implement arrange (precondition) logic

            _calculator.SecondNumber = number;

            //throw new PendingStepException();
        }

        [When("the two numbers are added")]
        public void WhenTheTwoNumbersAreAdded()
        {
            //TODO: implement act (action) logic

            _result = _calculator.Add();

            //throw new PendingStepException();
        }

        [Then("the result should be (.*)")]
        public void ThenTheResultShouldBe(int result)
        {
            //TODO: implement assert (verification) logic

            Assert.AreEqual(result, _result);

            //throw new PendingStepException();
        }

        [When(@"the two numbers are multiplied")]
        public void WhenTheTwoNumbersAreMultiplied()
        {
            _result = _calculator.Multiply();
        }

        [Given(@"the first and second number are:")]
        public void GivenTheFirstAndSecondNumberAre(Table table)
        {
            var numbers = table.CreateSet<CalculatorInput>();
            _calculator.FirstNumber = numbers.First().Number1;
            _calculator.SecondNumber = numbers.First().Number2;
        }


        // Internal Class
        public class CalculatorInput
        {
            public int Number1 { get; set; }
            public int Number2 { get; set; }
        }

    }
}
