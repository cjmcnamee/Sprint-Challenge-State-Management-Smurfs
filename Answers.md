1. What problem does the context API help solve?

  it allows us to pass out api through all our components and such much easier

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  actions - actions that we tell the reducers to do

  reducers - takes in current state and an action as arguments and
  returns and updated state object

  store - a state container for js.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

  component state is stored locally within a component while application state isn't

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  helps us return a function from action-creators instead of an action object.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

  useContext because its much easier to use for small projects like this.
