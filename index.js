require("datejs");
function combineUsers(...args) {
  const combinedObject = {
    users: [],
  };
  for (i = 0; i < args.length; i++) {
    const userArray = args[i];
    combinedObject.users.push(...userArray);
  }
  combinedObject.merge_date = new Date().toString("M/d/yyyy");

  return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};