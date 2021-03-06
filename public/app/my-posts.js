$(async function () {
  let postcontainer = $("#my-posts-container");
  let user_id = $("#id").text();
  await $.get(`/api/posts/${user_id}`, (posts) => {
    for (let p of posts) {
      let date = new Date(`${p.updatedAt}`);
      let time = `${p.updatedAt}`.match(/\d\d:\d\d/);
      let x = p.body.length;
      if (x > 200) {
        postcontainer.append(
          $(`
            <div class="col-4" style="margin-bottom: 3em;">
              <div class="card m-2 h-100 border-dark mb-3">
                <div class="card-header">
                <h5 class="card-title">${p.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${
                  p.user.username
                }</h6>
                <h6 class="card-subtitle mb-2 text-muted">${
                  date.getFullYear() +
                  "-" +
                  (date.getMonth() + 1) +
                  "-" +
                  date.getDate()
                } ${time} GMT</h6>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    ${p.body.substr(0, 200)} 
                    ...
                    <a href="#" class="rmBtn" id="${p._id}">read more</a>
                  </p>
                </div>
                <div class="card-footer">
                    <a href="#" class="card-link comment" id="${
                      p._id
                    }">Comment</a>
                    <a href="#" class="card-link delete" id="${
                      p._id
                    }">Delete</a>
                  </div>
              </div>
            </div>          
            `)
        );
      } else {
        postcontainer.append(
          $(`
            <div class="col-4" style="margin-bottom: 3em;">
              <div class="card m-2 h-100 border-dark mb-3">
                <div class="card-header">
                <h5 class="card-title">${p.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${
                  p.user.username
                }</h6>
                <h6 class="card-subtitle mb-2 text-muted">${
                  date.getFullYear() +
                  "-" +
                  (date.getMonth() + 1) +
                  "-" +
                  date.getDate()
                } ${time} GMT</h6>
                </div>
                <div class="card-body"> 
                  <p class="card-text">
                    ${p.body.substr(0, 200)} 
                    <br><br>
                    ${
                      p.image
                        ? `<img class="img-top rounded mx-auto d-block img-fluid upload_min" src="${p.image}" alt="Card image cap">`
                        : ``
                    }
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#" class="card-link comment" id="${
                    p._id
                  }">Comment</a>
                  <a href="#" class="card-link delete" id="${p._id}">Delete</a>
                </div>
              </div>
            </div>          
            `)
        );
      }
    }
  });

  $(".card-link.delete").click(async function () {
    let user_id = $("#id").text();
    let pId = this.id;
    await $.get(`/api/posts/delete/${pId}`, (error) => {
      if (error) {
        window.alert("Already Deleted");
      } else window.alert("Post Deleted! Refresh to view changes");
    });
  });
  $(".rmBtn").click(async function () {
    let pId = this.id;
    $(`#my-posts-container`).empty();
    await $.get("/api/posts/", (posts) => {
      for (let p of posts) {
        if (p._id == pId) {
          let date = new Date(`${p.updatedAt}`);
          let time = `${p.updatedAt}`.match(/\d\d:\d\d/);
          if (p.image) {
            $("#my-posts-container").append(
              $(`
                <div class="col-14 post" style="margin-bottom: 3em;" id="post-${
                  p._id
                }">
                  <div class="card m-2 h-100 border-dark mb-3 post_id" value="${
                    p._id
                  }">
                    <div class="card-header">
                      <h5 class="card-title">${p.title}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${
                        p.user.username
                      }</h6>
                      <h6 class="card-subtitle mb-2 text-muted">${
                        date.getFullYear() +
                        "-" +
                        (date.getMonth() + 1) +
                        "-" +
                        date.getDate()
                      } ${time} GMT</h6>
                    </div>
                    <br>
                    <img class="img-top rounded mx-auto d-block upload" src="${
                      p.image
                    }" alt="Card image cap">
                    <div class="card-body">
                      <p class="card-text">
                        ${p.body} 
                      </p>
                    </div>
                    <div class="card-footer" value="${p._id}">
                        <a href="#" class="card-link comment" id="${
                          p._id
                        }" value="${p._id}">Comment</a>
                        <a href="#" class="card-link delete" id="${
                          p._id
                        }">Delete</a>
                      </div>
                  </div>
                </div>        
              `)
            );
          } else {
            $("#my-posts-container").append(
              $(`
                <div class="col-14 post" style="margin-bottom: 3em;" id="post-${
                  p._id
                }">
                  <div class="card m-2 h-100 border-dark mb-3 post_id" value="${
                    p._id
                  }">
                    <div class="card-header">
                    <h5 class="card-title">${p.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${
                      p.user.username
                    }</h6>
                    <h6 class="card-subtitle mb-2 text-muted">${
                      date.getFullYear() +
                      "-" +
                      (date.getMonth() + 1) +
                      "-" +
                      date.getDate()
                    } ${time} GMT</h6>
                    </div>
                    <div class="card-body">
                      <p class="card-text">
                        ${p.body} 
                      </p>
                    </div>
                    <div class="card-footer" value="${p._id}">
                        <a href="#" class="card-link comment" id="${
                          p._id
                        }" value="${p._id}">Comment</a>
                        <a href="#" class="card-link delete" id="${
                          p._id
                        }">Delete</a>
                      </div>
                  </div>
                </div>        
              `)
            );
          }
        }
      }
    });
    $(".card-link.comment").click(async function () {
      $(`#posts-container`).empty();
      $("#title").text("Write Comment");
      await $(`#posts-container`).append(
        $(`
          <div class="container my-2">
            <form>
              <div class="mb-3">
                <label class="form-label">Body</label>
                <textarea class="form-control" rows="6" id="textareaBox"></textarea>
              </div>
              <button type="submit" class="btn btn-primary" id="commentBtn">Comment</button>
            </form>
          </div>
          `)
      );
      await $.get(`/api/comments/${id}`, (comments) => {
        if (comments.length > 0) {
          for (let c of comments) {
            $(`#posts-container`).append(
              $(`
                <div class="col-4" style="margin-bottom: 3em;">
                  <div class="card m-2 h-100 border-dark mb-3">
                    <div class="card-header">
                      <h5 class="card-title">${c.user.username}</h5>
                    </div>
                    <div class="card-body">
                      <p class="card-text">
                        ${c.body.substr(0, 200)} 
                      </p>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="card-link delete" id="${
                          p._id
                        }">Delete</a>
                      </div>
                  </div>
                </div>          
                `)
            );
          }
        }
      });
      $("#commentBtn").click(async function () {
        let textareaBox = $("#textareaBox");
        let user_id = $("#id").text();
        let postid = pId;
        let commentBody = textareaBox.val();
        $.post("/api/comments", {
          post: postid,
          user: user_id,
          body: commentBody,
        })
          .done(function (data) {
            window.alert("Comment Added!");
          })
          .fail((err) => {
            window.alert("Failed to create Comment!");
          });
      });
    });
  });
  $(".card-link.comment").click(async function () {
    let id = this.id;
    postcontainer.empty();
    $("#title").text("Write Comment");
    await postcontainer.append(
      $(`
        <div class="container my-2">
          <form>
            <div class="mb-3">
              <label class="form-label">Body</label>
              <textarea class="form-control" rows="6" id="textareaBox"></textarea >
            </div>
            <button type="submit" class="btn btn-primary" id="commentBtn">Comment</button>
          </form>
        </div>
        `)
    );
    await $.get(`/api/comments/${id}`, (comments) => {
      if (comments.length > 0) {
        for (let c of comments) {
          postcontainer.append(
            $(`
              <div class="col-4" style="margin-bottom: 3em;">
                <div class="card m-2 h-100 border-dark mb-3">
                  <div class="card-header">
                    <h5 class="card-title">${c.user.username}</h5>
                  </div>
                  <div class="card-body">
                    <p class="card-text">
                      ${c.body.substr(0, 200)} 
                    </p>
                  </div>
                  <div class="card-footer">
                      <a href="#" class="card-link delete" id="${
                        p._id
                      }">Delete</a>
                    </div>
                </div>
              </div>          
              `)
          );
        }
      }
    });
    $("#commentBtn").click(async function () {
      let textareaBox = $("#textareaBox");
      let user_id = $("#id").text();
      let postid = id;
      let commentBody = textareaBox.val();
      $.post("/api/comments", {
        postId: postid,
        userId: user_id,
        body: commentBody,
      })
        .done(function (data) {
          window.alert("Comment Added!");
        })
        .fail((err) => {
          window.alert("Failed to create Comment!");
        });
    });
  });
});
