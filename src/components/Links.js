import React from "react";
import user from "../data/user"; // Import user data

function Links() {
  return (
    <div>
      <h3>Links</h3>
      {/* Render GitHub link */}
      <a href={user.links.github}>{user.links.github}</a>
      <br />
      {/* Render LinkedIn link */}
      <a href={user.links.linkedin}>{user.links.linkedin}</a>
    </div>
  );
}

export default Links;
