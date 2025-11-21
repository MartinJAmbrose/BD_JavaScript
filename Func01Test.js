import { describe, it, assert, withSubmit } from "./unit_test.js";
import { getRewardTier } from "./Func01.js";

describe("getRewardTier", () => {
  const runCases = [
    {
      input: { level: 3, questsCompleted: 2, hasBattlePass: false },
      expected: "Bronze",
      description: "low level, few quests, no battle pass",
    },
    {
      input: { level: 25, questsCompleted: 18, hasBattlePass: true },
      expected: "Platinum",
      description: "battle pass upgrade to Platinum",
    },
    {
      input: { level: 50, questsCompleted: 30, hasBattlePass: false },
      expected: "Platinum",
      description: "Platinum from many quests without battle pass",
    },
  ];

  const submitCases = [
    ...runCases,
    {
      input: { level: 0, questsCompleted: 10, hasBattlePass: true },
      expected: "None",
      description: "level 0 should always be None",
    },
    {
      input: { level: 12, questsCompleted: 3, hasBattlePass: true },
      expected: "Silver",
      description: "battle pass upgrades Bronze to Silver for mid-level player",
    },
    {
      input: { level: 8, questsCompleted: 35, hasBattlePass: true },
      expected: "Platinum",
      description: "Platinum from quests should not be downgraded by battle pass rules",
    },
  ];

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { input, expected, description } = testCases[i];
    const { level, questsCompleted, hasBattlePass } = input;

    it(
      `Test ${i + 1}: getRewardTier(level=${level}, questsCompleted=${questsCompleted}, hasBattlePass=${hasBattlePass})`,
      () => {
        const result = getRewardTier(level, questsCompleted, hasBattlePass);
        assert.strictEqual(
          result,
          expected,
          [
            "Input:",
            `  level:          ${level}`,
            `  questsCompleted: ${questsCompleted}`,
            `  hasBattlePass:  ${hasBattlePass}`,
            "",
            `Description: ${description}`,
            "",
            `Expected: ${expected}`,
            `Actual:   ${result}`,
          ].join("\n")
        );
      }
    );
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});