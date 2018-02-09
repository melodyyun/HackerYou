<!DOCTYPE html>
<html>
<head>
	<title>Student Exercise</title>
</head>
<body>
	<script>
		const student = {
			equipment: [],
			energy: 0,
			grades: 0,
			uniform: {
				top: "",
				bottoms: "",
				shoes: ""
			},
			eat: function(calories){
				//fake equation to turn calories into energy
				potentialEnergy = Math.floor(calories / 10);

				//if else statement to ensure that energy cannot be made higher than 100:
				if((this.energy + potentialEnergy) < 100){
					this.energy += potentialEnergy;
					console.log(`energy: ${this.energy}`);
				}else{
					this.energy = 100;
					console.log(`energy: ${this.energy}`);
				}
			},
			//This method adds new items to the equipment array
			newEquipment: function(equip){
				this.equipment.push(equip);
				console.log(this.equipment);
			},
			//This method can change the values for the default properties in the uniform object
			//It can also add new key value pairs to the uniform object
			uniformChange: function(newTop = this.uniform.top, 
									newBottom = this.uniform.bottoms, 
									newShoes = this.uniform.shoes, 
									){
				//removes all clothing properties that are not default properties(top, bottoms, shoes)
				for (const article in this.uniform){
					if(article !== "top" && article !== "bottoms" && article !== "shoes"){
						delete this.uniform[article];
					}
				}
				//Update default property values (top, bottoms, shoes) with new value arguments
				this.uniform.top = newTop;
				this.uniform.bottoms = newBottom;
				this.uniform.shoes = newShoes;

				//Add NEW clothing key:values pairs to the uniform object
				let newArticleConfirm = confirm("Would you like to add a new key value pair to the uniform object?");
				//As long as newArticleConfirm === true, user will be prompted to keep adding key value pairs
				while(newArticleConfirm === true){
					let newProp = prompt("What should the property name be?");
					let newVal = prompt("What should the value of this property be?");
					this.uniform[newProp] = newVal;
					//User can end the loop by clicking cancel when prompted here:
					newArticleConfirm = confirm("Would you like to add ANOTHER key value pair to the uniform object?");
				}
			},
			studyTime: function(minutes){
				let hours = Math.floor(minutes /60);
				let gradeIncrease = hours * 5;
				let energyDecrease = hours * 2;
				let exhaustion = hours * 10;

				//If else statement to increment this.grades property, ensuring that it cannot be larger than 100
				if((this.grades + gradeIncrease) < 100){
					this.grades += gradeIncrease;
					//if else statement to decrement this.energy property, ensuring that energy cannot be smaller than 0
					if((this.energy - energyDecrease) > 0){
						this.energy -= energyDecrease;
						console.log(`energy: ${this.energy}`);
						console.log(`grades: ${this.grades}`);
					} else {
						this.energy = 0;
						//If else statement to decrement grades relative to "exhaustion" (energy: 0), ensuring that grades cannot be smaller than 0
						if((this.grades -= exhaustion) > 0){
							this.grades -= exhaustion;
						}else{
							this.grades = 0;
						}
						
						console.log(`energy: ${this.energy}`);
						console.log(`grades: ${this.grades}`);
					}
				} else {
					this.grades = 100;
					if((this.energy - energyDecrease) > 0){
						this.energy -= energyDecrease;
						console.log(`energy: ${this.energy}`);
						console.log(`grades: ${this.grades}`);
					} else {
						this.energy = 0;
							if((this.grades -= exhaustion) > 0){
								this.grades -= exhaustion;
							}else{
								this.grades = 0;
						}
						console.log(`energy: ${this.energy}`);
						console.log(`grades: ${this.grades}`);
					}	
				}
			}
		}
	</script>
</body>
</html>