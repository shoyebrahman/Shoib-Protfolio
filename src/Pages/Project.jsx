const Project = () => {
  return (
    <div
      id="project"
      className="bg-gradient-to-br  from-gray-900 via-purple-900 to-black text-white font-sans py-6"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mb-6 flex-col">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-gray-300 text-center">
            Check out some of the projects I've worked on.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Project Card 1 */}
          <div className="card bg-base-100 shadow-md">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Project 1"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Project Title 1</h2>
              <p>Brief description of project number one.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm">View Details</button>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="card bg-base-100 shadow-md">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Project 2"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Project Title 2</h2>
              <p>Short explanation about the second project.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm">View Details</button>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="card bg-base-100 shadow-md">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Project 3"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Project Title 3</h2>
              <p>Details about the third project I've been working on.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm">View Details</button>
              </div>
            </div>
          </div>

          {/* You can add more project cards here */}
        </div>
      </div>
    </div>
  );
};

export default Project;
