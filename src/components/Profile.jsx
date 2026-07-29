function Profile() {

  const profileData = [
    {
      title: "Personal Information",
      value: "Name, age, and basic user details"
    },
    {
      title: "Health Preferences",
      value: "Custom health monitoring settings"
    },
    {
      title: "Pendant Connection",
      value: "Connected PULSE AI wearable device"
    }
  ];


  return (
    <section className="profile-section">

      <div className="profile-content">

        <h2>
          User Profile
        </h2>

        <p>
          Manage your personal information and
          customise your PULSE AI experience.
        </p>


        <div className="profile-cards">

          {profileData.map((item, index) => (

            <div className="profile-card" key={index}>

              <h3>
                👤 {item.title}
              </h3>

              <p>
                {item.value}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Profile;
