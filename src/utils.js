/**
 * @param {*} exercise An exercise object from civicPrototype.json.
 * @param {string} mode Expects either "learn" (default) or "teach." Otherwise, the function returns undefined.
 * @returns The ID of the first content item in the specified mode. "First" refers to the item with the lowest order.
 * 
 * Returns undefined if the mode does not match an expected value, or if the specified mode has no content items.
 */
export function getFirstContentId(exercise, mode = "learn") {

  if (mode === "teach" && exercise.teachContent.length) {
    const firstTeachContentItem = exercise.teachContent
      .sort((item1, item2) => item1.order - item2.order)
      .find(() => true);
    return firstTeachContentItem.id;

  } else if (mode === "learn" && exercise.learnContent.length) {
    const firstLearnContentItem = exercise.learnContent
      .sort((item1, item2) => item1.order - item2.order)
      .find(() => true);
    return firstLearnContentItem.id;
  }

  return;
}