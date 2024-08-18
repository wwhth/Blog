export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-2">Project 1</h2>
          <p className="text-gray-700">This is a description of project 1.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-2">Project 2</h2>
          <p className="text-gray-700">This is a description of project 2.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-2">Project 3</h2>
          <p className="text-gray-700">This is a description of project 3.</p>
        </div>
      </div>
    </div>
  );
}
