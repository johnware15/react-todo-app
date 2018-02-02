# Set-up
- It would be helpful to know how you run your app. There are no scripts in the package.json so I was not sure how to observe your app in action. If I did not know webpack I would not be able to move forward here.

### Notes:
- Adds script `start` which runs `webpack-dev-server`
- Adds public folder with stylesheets folder within, and links style.css to head of index.html.
- I would suggest moving the index.html file to either the public or the src folders, not at root level. I save root level for config only, and all code for performance in folders src/public/test etc..
- I would be consistent in your component class objects with where you place the `render()` method and your other methods, either always on top, always on bottom, or maybe alphabetical? I am not set on one system but pick one and be consistent. As an app grows you will thank yourself for doing this.
- I don't think `table-list-header` needs to be it's own component, it's such a small file that it can probably be absorbed in to `todos-list`.


### Overall
- Great Work!
- This looks really solid!!!
