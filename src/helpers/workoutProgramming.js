const shortTimingReps = [20, 60];
const longTimingReps = [20, 120];

const accessoryReps = [15, 30];
const highReps = [10, 20];
const lowReps = [8, 12];

const exercises = {
  gluteDominant: {
    gluteBridge: {
      name: "Glute bridge",
      weightRange: [0, 52.5],
      repsRange: highReps,
      increment: 2.5
    },
    singleLegGluteBridge: {
      name: "Single-leg glute bridge",
      weightRange: [0, 30],
      repsRange: highReps,
      increment: 2.5
    },
    gluteMarch: {
      name: "Shoulder-elevated glute march",
      weightRange: [0, 0],
      repsRange: shortTimingReps,
      increment: 0
    },
    hipThrust: {
      name: "Hip thrust",
      weightRange: [0, 100],
      repsRange: highReps,
      increment: 5
    },
    singleLegHipThrust: {
      name: "Single-leg hip thrust",
      weightRange: [0, 0],
      repsRange: highReps,
      increment: 0
    },
    pauseHipThrust: {
      name: "Paused hip thrusts",
      weightRange: [0, 100],
      repsRange: highReps,
      increment: 2.5
    }
  },
  pull: {
    oneArmRow: {
      name: "One-arm row",
      weightRange: [15, 30],
      repsRange: lowReps,
      increment: 2.5
    },
    latPulldown: {
      name: "Front lat pulldonwn",
      weightRange: [30, 50],
      repsRange: lowReps,
      increment: 5
    },
    machineRows: {
      name: "Cable machine rows",
      weightRange: [30, 50],
      repsRange: lowReps,
      increment: 5
    },
    row: {
      name: "Bent-over row",
      weightRange: [20, 80],
      repsRange: lowReps,
      increment: 5
    },
    pullUp: {
      name: "Assisted pull-up",
      weightRange: [0, 50],
      repsRange: [1, 5],
      increment: 5
    }
  },
  quadDominant: {
    squat: {
      name: "Squat",
      weightRange: [0, 45],
      repsRange: highReps,
      increment: 5
    },
    stepUp: {
      name: "Step Up",
      weightRange: [0, 25],
      repsRange: highReps,
      increment: 5
    },
    walkingLunge: {
      name: "Walking lunge",
      weightRange: [0, 25],
      repsRange: highReps,
      increment: 2.5
    },
    bulgarianSplitSquat: {
      name: "Bulgarian split squat",
      weightRange: [0, 25],
      repsRange: highReps,
      increment: 5
    }
  },
  push: {
    benchPress: {
      name: "Bench press",
      weightRange: [20, 60],
      repsRange: lowReps,
      increment: 5
    },
    overheadPress: {
      name: "Overhead press",
      weightRange: [20, 60],
      repsRange: lowReps,
      increment: 5
    },
    kneesPushUp: {
      name: "Push up on knees",
      weightRange: [0, 0],
      repsRange: [3, 10],
      increment: 0
    },
    pushUp: {
      name: "Push up",
      weightRange: [0, 0],
      repsRange: [3, 10],
      increment: 0
    },
    inclineBench: {
      name: "Incline bench press",
      weightRange: [20, 45],
      repsRange: lowReps,
      increment: 5
    }
  },
  hipDominant: {
    rdl: {
      name: "Romanian deadlift",
      weightRange: [30, 60],
      repsRange: highReps,
      increment: 5
    },
    backExtension: {
      name: "45 degree back hyperextension",
      weightRange: [0, 25],
      repsRange: highReps,
      increment: 2.5
    },
    singleLegRdl: {
      name: "Single leg RDL",
      weightRange: [0, 25],
      repsRange: highReps,
      increment: 2.5
    },
    kettlebellSwing: {
      name: "Kettlebell Swing",
      weightRange: [5, 35],
      repsRange: highReps,
      increment: 2.5
    },
    goodMorning: {
      name: "Good morning",
      weightRange: [0, 60],
      repsRange: highReps,
      increment: 5
    }
  },
  gluteAccessory: {
    sideAbduction: {
      name: "Side lying abduction",
      weightRange: [0, 0],
      repsRange: accessoryReps,
      increment: 0
    },
    clam: {
      name: "Clams",
      weightRange: [0, 0],
      repsRange: accessoryReps,
      increment: 0
    },
    bandWalks: {
      name: "Banded side steps",
      weightRange: [0, 0],
      repsRange: accessoryReps,
      increment: 0
    }
  },
  linearCore: {
    plank: {
      name: "Plank",
      weightRange: [0, 0],
      repsRange: longTimingReps,
      increment: 0
    },
    crunch: {
      name: "Crunch",
      weightRange: [0, 30],
      repsRange: accessoryReps,
      increment: 2.5
    },
    sitUp: {
      name: "Straight-leg sit-up",
      weightRange: [0, 0],
      repsRange: accessoryReps,
      increment: 0
    },
    hangingLegRaise: {
      name: "Hanging leg raise",
      weightRange: [0, 0],
      repsRange: highReps,
      increment: 0
    },
    footElevatedPlank: {
      name: "Foot elevated plank",
      weightRange: [0, 0],
      repsRange: longTimingReps,
      increment: 0
    }
  },
  rotationalCore: {
    sidePlank: {
      name: "Side plank",
      weightRange: [0, 0],
      repsRange: shortTimingReps,
      increment: 0
    },
    sideCrunch: {
      name: "Side crunch",
      weightRange: [0, 0],
      repsRange: accessoryReps,
      increment: 0
    },
    ropeChops: {
      name: "Rope horizontal chops",
      weightRange: [10, 50],
      repsRange: [10, 15],
      increment: 5
    },
    sideBend: {
      name: "Dumbbell side bend",
      weightRange: [0, 0],
      repsRange: accessoryReps,
      increment: 0
    }
  }
};

const wk1t4DayAExercises = {
  A1: exercises.gluteDominant.hipThrust,
  A2: exercises.pull.row,
  B1: exercises.quadDominant.squat,
  B2: exercises.push.benchPress,
  hipDominant: exercises.hipDominant.rdl,
  gluteAccessory: exercises.gluteAccessory.sideAbduction,
  linearCore: exercises.linearCore.plank,
  rotationalCore: exercises.rotationalCore.sidePlank
};

const wk1t4DayBExercises = {
  A1: exercises.gluteDominant.singleLegGluteBridge,
  A2: exercises.pull.pullUp,
  B1: exercises.quadDominant.stepUp,
  B2: exercises.push.overheadPress,
  hipDominant: exercises.hipDominant.goodMorning,
  gluteAccessory: exercises.gluteAccessory.clam,
  linearCore: exercises.linearCore.crunch,
  rotationalCore: exercises.rotationalCore.sideCrunch
};

const wk1t4DayCExercises = {
  A1: exercises.gluteDominant.gluteMarch,
  A2: exercises.pull.oneArmRow,
  B1: exercises.quadDominant.squat,
  B2: exercises.push.kneesPushUp,
  hipDominant: exercises.hipDominant.singleLegRdl,
  gluteAccessory: exercises.gluteAccessory.bandWalks,
  linearCore: exercises.linearCore.plank,
  rotationalCore: exercises.rotationalCore.sidePlank
};

const wk5t8DayAExercises = {
  A1: exercises.gluteDominant.hipThrust,
  A2: exercises.pull.pullUp,
  B1: exercises.quadDominant.stepUp,
  B2: exercises.push.benchPress,
  hipDominant: exercises.hipDominant.rdl,
  gluteAccessory: exercises.gluteAccessory.sideAbduction,
  linearCore: exercises.linearCore.plank,
  rotationalCore: exercises.rotationalCore.sidePlank
};

const wk5t8DayBExercises = {
  A1: exercises.gluteDominant.singleLegHipThrust,
  A2: exercises.pull.oneArmRow,
  B1: exercises.quadDominant.walkingLunge,
  B2: exercises.push.overheadPress,
  hipDominant: exercises.hipDominant.backExtension,
  gluteAccessory: exercises.gluteAccessory.clam,
  linearCore: exercises.linearCore.crunch,
  rotationalCore: exercises.rotationalCore.sideCrunch
};

const wk5t8DayCExercises = {
  A1: exercises.gluteDominant.pauseHipThrust,
  A2: exercises.pull.machineRows,
  B1: exercises.quadDominant.squat,
  B2: exercises.push.pushUp,
  hipDominant: exercises.hipDominant.kettlebellSwing,
  gluteAccessory: exercises.gluteAccessory.bandWalks,
  linearCore: exercises.linearCore.sitUp,
  rotationalCore: exercises.rotationalCore.ropeChops
};

const wk9t12DayAExercises = {
  A1: exercises.gluteDominant.hipThrust,
  A2: exercises.pull.row,
  B1: exercises.quadDominant.squat,
  B2: exercises.push.pushUp,
  hipDominant: exercises.hipDominant.rdl,
  gluteAccessory: exercises.gluteAccessory.sideAbduction,
  linearCore: exercises.linearCore.crunch,
  rotationalCore: exercises.rotationalCore.ropeChops
};

const wk9t12DayBExercises = {
  A1: exercises.gluteDominant.singleLegHipThrust,
  A2: exercises.pull.pullUp,
  B1: exercises.quadDominant.bulgarianSplitSquat,
  B2: exercises.push.overheadPress,
  hipDominant: exercises.hipDominant.goodMorning,
  gluteAccessory: exercises.gluteAccessory.bandWalks,
  linearCore: exercises.linearCore.footElevatedPlank,
  rotationalCore: exercises.rotationalCore.sideBend
};

const wk9t12DayCExercises = {
  A1: exercises.gluteDominant.pauseHipThrust,
  A2: exercises.pull.machineRows,
  B1: exercises.quadDominant.squat,
  B2: exercises.push.inclineBench,
  hipDominant: exercises.hipDominant.backExtension,
  gluteAccessory: exercises.gluteAccessory.clam,
  linearCore: exercises.linearCore.hangingLegRaise,
  rotationalCore: exercises.rotationalCore.ropeChops
};

export const program = [
  { A: wk1t4DayAExercises, B: wk1t4DayBExercises, C: wk1t4DayCExercises },
  { A: wk1t4DayAExercises, B: wk1t4DayBExercises, C: wk1t4DayCExercises },
  { A: wk1t4DayAExercises, B: wk1t4DayBExercises, C: wk1t4DayCExercises },
  { A: wk1t4DayAExercises, B: wk1t4DayBExercises, C: wk1t4DayCExercises },
  { A: wk5t8DayAExercises, B: wk5t8DayBExercises, C: wk5t8DayCExercises },
  { A: wk5t8DayAExercises, B: wk5t8DayBExercises, C: wk5t8DayCExercises },
  { A: wk5t8DayAExercises, B: wk5t8DayBExercises, C: wk5t8DayCExercises },
  { A: wk5t8DayAExercises, B: wk5t8DayBExercises, C: wk5t8DayCExercises },
  { A: wk9t12DayAExercises, B: wk9t12DayBExercises, C: wk9t12DayCExercises },
  { A: wk9t12DayAExercises, B: wk9t12DayBExercises, C: wk9t12DayCExercises },
  { A: wk9t12DayAExercises, B: wk9t12DayBExercises, C: wk9t12DayCExercises },
  { A: wk9t12DayAExercises, B: wk9t12DayBExercises, C: wk9t12DayCExercises }
];