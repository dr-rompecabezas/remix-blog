import { Link, redirect } from 'remix';

export const action = async ({ request }) => {
  const form = await request.formData();
  const title = form.get('title');
  const body = form.get('body');
  console.log({ title, body });

  // @todo: submit post to database
  return redirect('/posts');
};

function NewPost() {
  return (
    <>
      <div className="page-header">
        <h1>New Post</h1>
        <Link to="/posts" className="btn btn-reverse">
          Back
        </Link>
      </div>

      <div className="page-content">
        <form method="POST">
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
          </div>
          <div className="form-control">
            <label htmlFor="body">Body</label>
            <textarea name="body" id="body" />
          </div>
          <button className="btn btn-block">Create Post</button>
        </form>
      </div>
    </>
  );
}

export default NewPost;
