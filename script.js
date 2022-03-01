$(document).ready(function () {
  var friendNames = ["Jon", "Christoph", "Kaley", "Mep", "Louu"];
  var locationNames = [
    "Hallway",
    "Garage",
    "Front Yard",
    "Back Yard",
    "Kitchen",
    "Living Room",
    "Bedroom",
    "Dining Room",
    "Attic",
  ];
  var objectNames = [
    "Canvas",
    "Paper Clip",
    "Car",
    "Coat Hanger",
    "Hair Tie",
    "Checkbook",
    "Soy Sauce Packet",
    "Ring",
    "Computer",
    "Table",
    "Door",
    "Rubber Duck",
    "Pool Stick",
    "Tire Swing",
    "Teddy Bear",
    "Shoe Lace",
    "Carrot",
    "Packing Peanuts",
    "TV",
    "Chalk Stick",
  ];

  for (var i = 1; i < 101; i++) {
    var heading = $(`<h3>Accusation${i}</h3>`);
    heading.click(notification(i));

    $("body").append(heading);
  }

  function notification(i) {
    function fun() {
      alert(
        `Accusation ${i}: I accuse ${
          friendNames[i % friendNames.length]
        }, with the ${objectNames[i % objectNames.length]}, in the ${
          locationNames[i % locationNames.length]
        }!`
      );
    }
    return fun;
  }
});
