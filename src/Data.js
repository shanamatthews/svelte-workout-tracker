// todo
// - [ ] Use a real backend instead of a Gist
// - [ ] Prevent writing the same workout multiple times

import * as d3 from "d3";

const gistUrl = "https://api.github.com/gists/60113aabd7eef79215609928c8708c43";
const ghToken = "token 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";

function writeWorkoutToGist(url, day, existingGistData, workoutJson) {
  var xhr = new XMLHttpRequest();
  xhr.open("PATCH", url);

  xhr.setRequestHeader("Authorization", ghToken);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      // console.log(xhr.status);
      // console.log(xhr.responseText);
    }
  };

  if (existingGistData === "") {
    existingGistData = "[]";
  }

  var prevWorkoutJson = JSON.parse(existingGistData); // always an array
  prevWorkoutJson.push(workoutJson);
  var combinedWorkoutData = JSON.stringify(prevWorkoutJson);
  console.log(combinedWorkoutData);
  var workoutData = {
    files: {
      [day]: {
        content: combinedWorkoutData
      }
    }
  };

  var data = JSON.stringify(workoutData);

  xhr.send(data);
}

export function appendToGistFromWorkout(workoutJson, day) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", gistUrl);

  xhr.setRequestHeader("Authorization", ghToken);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var files = JSON.parse(xhr.responseText).files;
      var fileContent = files[day].content;
      writeWorkoutToGist(gistUrl, day, fileContent, workoutJson);
    }
  };

  xhr.send();
}

// will return null if file was empty
export function getLastWorkoutSets(day) {
  var data = d3.json(gistUrl).then(getFileContent.bind(null, day));
  return data;
}

function getFileContent(day, data) {
  var files = data.files;
  var fileContent = files[day].content;
  if (fileContent === "" || fileContent === "[]") {
    fileContent = "[]";
    return null;
  }

  var lastWorkoutStatsForDay = JSON.parse(fileContent).pop();
  return lastWorkoutStatsForDay.sets;
}