// import apiClient from "./api-client";

import create from "./http-service";
export default create("/users");
export interface User {
  id: number;
  name: string; // we are intrested in these 2 properties for now.
}

// class UserService {
//   getAllUsers() {
//     const controller = new AbortController();
//     const request = apiClient.get<User[]>("/users", {
//       signal: controller.signal,
//     });
//     return { request, cancel: () => controller.abort() };
//   }
//   deleteUser(userID: number) {
//     return apiClient.delete("/users/" + userID);
//   }
//   createUser(newUser: User) {
//     return apiClient.post("/users", newUser);
//   }
//   updateUSer(updateUSer: User) {
//     return apiClient.patch("/users/" + updateUSer.id, updateUSer);
//   }
// }

// export default new UserService();
