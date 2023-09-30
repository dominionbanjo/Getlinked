function extractErrorMessages(response) {
  const errorMessages = {};

  // Iterate over the keys in the response object
  for (const key in response) {
    if (Array.isArray(response[key]) && response[key].length > 0) {
      // Check if the value associated with the key is a non-empty array
      errorMessages[key] = response[key][0]; // Add the message to the object
    }
  }

  return errorMessages;
}

export default extractErrorMessages;
// Example usage
// const response = {
//   email: ["This field may not be blank."],
//   team_name: ["This field may not be blank."],
//   phone_number: ["This field may not be blank."],
//   project_topic: ["This field may not be blank."],
// };
