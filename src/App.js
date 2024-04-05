import DeleteButton from "./component/DeleteButton";
import DataTable from "./component/DataTable";
import SettingMenu from "./SettingMenu";
import InfoMessage from "./component/InfoMessage";
import DateInput from "./component/DateInput";
import EmailInput from "./component/EmailInput";

function App() {
  return (
    <>
      <div className="px-2 border-b border-gray-300">
        <div className="md:py-8 py-4 md:w-3/4 mx-auto">
          <h2 className="sm:text-xl text-base font-light">
            Organization Settings
          </h2>
        </div>
      </div>
      <div className="py-4 md:py-6 px-2">
        <div className="sm:flex md:w-3/4 mx-auto sm:gap-6">
          {/* Menu */}
          <SettingMenu />
          {/* Menu */}
          <div className="flex-1 sm:w-2/3 sm:text-base text-xs">
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
              <InfoMessage />
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
              <form className="form">
                <EmailInput />
                <DeleteButton />
              </form>
            </div>
            <div className="mt-5 sm:mt-5 border-b border-gray-300 sm:pb-6 pb-3">
              <p className="sm:text-sm text-xs font-medium sm:mb-3 mb-1">
                Delete information withing a period of time
              </p>
              <p className="font-light sm:mb-3 mb-1">
                Choose a date range to delete all information from scheduled
                events within that period of time.
              </p>
              <div className="flex items-stretch gap-x-4 gap-y-2 flex-wrap">
                <DateInput />
                <DeleteButton />
              </div>
            </div>
            <div className="mt-5 sm:mt-5 border-b border-gray-300 sm:pb-6 pb-3 ">
              <p className="sm:text-sm text-xs font-medium sm:mb-3 mb-1 ">
                Data deletion history
              </p>
              <DataTable />
            </div>
            <div className="mt-5 sm:mt-5 sm:pb-6 pb-3">
              <p className="sm:text-sm text-xs font-medium sm:mb-3 mb-1">
                Delete your account
              </p>
              <p className="font-light sm:mb-3 mb-1">
                You can delete your account in your{" "}
                <span className="text-blue-600 cursor-pointer">
                  account settings
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
