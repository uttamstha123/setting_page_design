function App() {
  return (
    <>
      <div className="px-2 border-b border-gray-300">
        <div className="md:py-8 py-4 md:w-3/4 mx-auto">
          <h2 className="sm:text-xl text-base font-light">Organization Settings</h2>
        </div>
      </div>
      <div className="py-4 md:py-6 px-2">
        {/* Menu */}
        <div className="sm:flex md:w-3/4 mx-auto">
          <div className="sm:w-1/3 pb-4 border-b border-gray-300 sm:border-0 sm:text-base text-sm">
            <ul className="font-light">
              <li className="mb-1 md:mb-3">Shared event types</li>
              <li className="mb-1 md:mb-3">Single sign-on</li>
              <li className="mb-1 md:mb-3">Workflows</li>
              <li className="font-medium">Data deletion</li>
            </ul>
          </div>
          <div className="flex-1 sm:w-2/3 sm:text-base text-sm">
            <div className="mt-5 sm:mt-0 border-b border-gray-300 sm:pb-6 pb-3">
              <p className="font-medium sm:mb-3 mb-1">
                Delete information from your organization
              </p>
              <p className="font-light sm:mb-3 mb-1">
                When anyone in your organization schedules an event with an
                invitee, information about the event and everyone part of it is
                saved in Calendly. If you need to delete this information from
                Calendly and its vendors for compliance reasons, you can do so
                without contacting support.
              </p>
              <p className="font-medium sm:my-6 my-4 bg-red-50 py-2 px-4 sm:py-4 sm:px-8 rounded-sm">
                Once you delete information, you won't be able to recover it.
              </p>
              <p className="font-light sm:mb-3 mb-1">
                Invitee data will be deleted{" "}
                <span className="font-medium">7 days </span> from the date you
                make the request.
              </p>
            </div>
            <div className="mt-5 border-b border-gray-300 sm:pb-6 pb-3">
              <p className="sm:text-sm text-xs font-medium sm:mb-3 mb-1">
                Delete information for specific invitees
              </p>
              <p className="font-light sm:mb-3 mb-1">
                Enter an invitee's email to delete all of their personally
                identifiable information from your organization and
                integrations. During the data deletion process, Calendly removes
                the deleted invitee from their spot on group events and cancels
                both pending and upcoming events with them.
              </p>
              <input id="email" name="email" type="email" className="sm:my-3 my-2 w-full h-20 rounded-md border-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500" placeholder=""></input>
              <button className="mt-3 rounded-full bg-red-700 py-2 px-5 text-white sm:text-sm text-xs">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
