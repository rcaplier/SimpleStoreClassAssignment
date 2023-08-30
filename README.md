# **Simple Store Class Assignment**

<!-- TOC -->
* [**Simple Store Class Assignment**](#simple-store-class-assignment)
  * [Installation](#installation)
  * [Context](#context)
  * [Task Description](#task-description)
  * [Requirements](#requirements)
  * [Technical Details](#technical-details)
  * [How to Submit Your Solution](#how-to-submit-your-solution)
  * [Evaluation Criteria](#evaluation-criteria)
<!-- TOC -->

## Installation

Run `git clone git@github.com:rcaplier/SimpleStoreClassAssignment.git`

Run `yarn install` or `npm install`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


### Context

We are managing a variety of user-generated content and data. To systematically manage this
data, we're introducing the concept of the `Store` class. This class will serve as a structured
storage utility.

### Task Description

Your task is to implement a basic `Store` class in TypeScript. The class should provide methods to
manage and retrieve user-generated content and data.

### Requirements

1. Storage: The `Store` class should be able to:
- Store JSON values.
- Retrieve stored values.
- List all stored entries.
2. Nested Keys: The store should handle nested keys using a dot notation, e.g.,
   `user.address.city`. This implies storing and accessing nested objects within the store.
3. Serializability: The store should be able to be serialized to json.

###    Technical Details

- Implement the `Store` class in `store.ts`.
- Ensure the class can handle nested keys and checks for serializability before storing values.

###   How to Submit Your Solution

1. Develop the `Store` class with the mentioned requirements.
3. Push your changes to a github repository.
4. Share the link to your repository for review.

###    Evaluation Criteria

1. Clarity and quality of your code.
2. The correctness of the implementation.
3. Following TypeScript and JavaScript best practices.
   Guidance
   Write code that's clean, efficient, and structured well. Pay attention to proper error handling,
   concise function and variable names, and an organized code structure.
