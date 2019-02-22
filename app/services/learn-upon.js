angular.module('mainApp')
  .service('LearnUponService', [ '$timeout', function($timeout) {
    this.usersList = {
      "user": [
        {
          "id": 146407,
          "first_name": "Lorenzo",
          "last_name": "Chapman",
          "email": "lorenzo.chapman@mail.com",
          "sign_in_count": 241,
          "number_of_enrollments": 3,
          "number_of_enrollments_accessed": 2,
          "enabled": true,
          "user_type": "admin"
        },
        {
          "id": 473935,
          "first_name": "Clark",
          "last_name": "Wilkerson",
          "email": "clark.wilkerson@mail.com",
          "sign_in_count": 253,
          "number_of_enrollments": 9,
          "number_of_enrollments_accessed": 5,
          "enabled": true,
          "user_type": "learner"
        },
        {
          "id": 573920,
          "first_name": "Tomas",
          "last_name": "Drake",
          "email": "tomas.drake@mail.com",
          "sign_in_count": 184,
          "number_of_enrollments": 7,
          "number_of_enrollments_accessed": 6,
          "enabled": true,
          "user_type": "learner"
        },
        {
          "id": 678203,
          "first_name": "Meredith",
          "last_name": "Cobb",
          "email": "meredith.cobb@mail.com",
          "sign_in_count": 156,
          "number_of_enrollments": 4,
          "number_of_enrollments_accessed": 1,
          "enabled": true,
          "user_type": "learner"
        },
        {
          "id": 184957,
          "first_name": "Gregg",
          "last_name": "Wise",
          "email": "gregg.wise@mail.com",
          "sign_in_count": 301,
          "number_of_enrollments": 3,
          "number_of_enrollments_accessed": 2,
          "enabled": true,
          "user_type": "learner"
        },
        {
          "id": 173950,
          "first_name": "Garrett",
          "last_name": "Ford",
          "email": "garrett.ford@mail.com",
          "sign_in_count": 147,
          "number_of_enrollments": 1,
          "number_of_enrollments_accessed": 1,
          "enabled": true,
          "user_type": "learner"
        },
        {
          "id": 739561,
          "first_name": "Kim",
          "last_name": "Weber",
          "email": "kim.weber@mail.com",
          "sign_in_count": 293,
          "number_of_enrollments": 4,
          "number_of_enrollments_accessed": 4,
          "enabled": true,
          "user_type": "learner"
        },
        {
          "id": 446274,
          "first_name": "Dennis",
          "last_name": "Hanson",
          "email": "dennis.hanson@mail.com",
          "sign_in_count": 298,
          "number_of_enrollments": 9,
          "number_of_enrollments_accessed": 2,
          "enabled": true,
          "user_type": "learner"
        },
        {
          "id": 738739,
          "first_name": "Denise",
          "last_name": "Sharp",
          "email": "denise.sharp@mail.com",
          "sign_in_count": 142,
          "number_of_enrollments": 2,
          "number_of_enrollments_accessed": 2,
          "enabled": true,
          "user_type": "learner"
        },
        {
          "id": 349573,
          "first_name": "Guadalupe",
          "last_name": "Ball",
          "email": "guadalupe.ball@mail.com",
          "sign_in_count": 7,
          "number_of_enrollments": 0,
          "number_of_enrollments_accessed": 0,
          "enabled": false,
          "user_type": "learner"
        },
        {
          "id": 902847,
          "first_name": "Angie",
          "last_name": "Fowler",
          "email": "angie.fowler@mail.com",
          "sign_in_count": 472,
          "number_of_enrollments": 5,
          "number_of_enrollments_accessed": 3,
          "enabled": true,
          "user_type": "learner"
        },
        {
          "id": 658392,
          "first_name": "Darlene",
          "last_name": "Dennis",
          "email": "darlene.dennis@mail.com",
          "sign_in_count": 295,
          "number_of_enrollments": 4,
          "number_of_enrollments_accessed": 2,
          "enabled": true,
          "user_type": "learner"
        },
        {
          "id": 562373,
          "first_name": "Kristi",
          "last_name": "Harmon",
          "email": "kristi.harmon@mail.com",
          "sign_in_count": 93,
          "number_of_enrollments": 5,
          "number_of_enrollments_accessed": 5,
          "enabled": true,
          "user_type": "learner"
        },
        {
          "id": 573926,
          "first_name": "Gwen",
          "last_name": "Underwood",
          "email": "gwen.underwood@mail.com",
          "sign_in_count": 108,
          "number_of_enrollments": 11,
          "number_of_enrollments_accessed": 0,
          "enabled": true,
          "user_type": "learner"
        },
        {
          "id": 583957,
          "first_name": "Jamie",
          "last_name": "Padilla",
          "email": "jamie.padilla@mail.com",
          "sign_in_count": 156,
          "number_of_enrollments": 2,
          "number_of_enrollments_accessed": 1,
          "enabled": true,
          "user_type": "learner"
        }
      ]
    };

    this.getUsers = function(cb) {
      $timeout(() => {cb(this.usersList)}, 1000);
    };

    this.getUser = function(id, cb) {
      let foundUser = null;

      for (user of this.usersList.user) {
        if (user.id != id) continue;

        foundUser = user;
      }

      $timeout(() => {cb(foundUser)}, 1000);
    };
  }]);
