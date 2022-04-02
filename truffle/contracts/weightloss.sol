pragma solidity >=0.5.1 <0.9.0;

contract WeightLoss {
    struct Meal {
        string name;
        uint8 kcal;
    }
    address owner;
    uint8 goal;
    Meal[] meals;

    

    function makePayment() public payable {}

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function getKcal() public view returns (uint8){
        uint8 temp = 0;
        for (uint i = 0; i < meals.length; i++){
            temp += meals[i].kcal;
        }
        return temp;
    }

    function addMeal(Meal memory meal) public {
        meals.push(meal);
    }

    function getGoal () public view returns (uint8) {
        return goal;
    }

    function getMeals () public view returns (Meal[] memory) {
        return meals;
    }

}