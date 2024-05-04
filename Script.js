const stars = document.querySelectorAll(".fa-star")
let emojis = document.querySelectorAll(".far")

let colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"]

stars.forEach((satr, index) => {
    satr.addEventListener("click", () => {
        updateRating(index)
        // console.log('click', index);
    })
})

function updateRating(index) {
    stars.forEach((stars, idx) => {
        if (idx < index + 1) {
            stars.classList.add("active")
            // console.log(idx);
        } else {
            stars.classList.remove("active")
        }
    })

    emojis.forEach((emoji) => {
        emoji.style.transform = `translateX(-${index * 50}px)`
        emoji.style.color = colorsArray[index]
    })
}

// var fruits = ["apple", "banana", "orange"];
// for (var i = 0; i < fruits.length; i++) {
//   console.log("Fruit: " + fruits[i]);
// }
// function greet(name) {
//     console.log("Hello, " + name);
//   }
  
//   greet("Alice", "Bob");
  

// function calculateAverage(numbers) {
//     var sum = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         // console.log(i)

//       sum += numbers[i];
//       console.log(sum);
//     }
//     console.log(numbers.length);
//     return sum / numbers.length;
//   }
  
//   var numbers = [10, 20, 30, 40, 50, 50];
//   var average = calculateAverage(numbers);
//   console.log("The average is: " + average);

function hasDuplicates(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
        //  console.log(array[i])
        if ( array[i] === array[j]) {
          return true;
        }
      }
    }
    return false;
  }
  
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var hasDuplicatesResult = hasDuplicates(numbers);
  console.log("Array has duplicates: " + hasDuplicatesResult);
  