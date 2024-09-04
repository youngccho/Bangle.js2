const members = [];
const configData = {};

document.getElementById("config-form").addEventListener("submit", function (event) {
    event.preventDefault();

    Object.assign(configData, {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        comment: document.getElementById("comment").value,
        site: document.getElementById("site").value,
        start_date: document.getElementById("start-date").value,
        pet_enabled: document.getElementById("pet-enabled").value,
        family_review_enabled: document.getElementById("family-review-enabled").value,
        last_review_date: document.getElementById("last-review-date").value,
        credits: document.getElementById("credits").value,
        steps_per_level: document.getElementById("steps-per-level").value,
        steps_per_point: document.getElementById("steps-per-point").value,
        points_per_days_worn: document.getElementById("points-per-days-worn").value,
        leadboard_opt_in: document.getElementById("leadboard-opt-in").value,
        update_account_allowed: document.getElementById("update-account-allowed").value,
    });

    const configJson = JSON.stringify(configData, null, 2);
    console.log(configJson);
});

async function sendConfigToDB (id, configJSON) {
    let data = {
        device_id: id,
        config_json: configJSON,
    };
    const object = JSON.stringify(data);

    try {
        const response = await fetch('https://vn.ugavel.com/ugasmartwatch/profiles', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: object,
        });

        if (response.ok) {
            console.log('Sent the config information successfully');
          } else {
            console.error('Error sending the config information:', response.status);
          }
        } catch (error) {
          console.error('Error while making the request:', error);
        }
      }



document.getElementById("members-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const memberData = {
        id: document.getElementById("member-id").value,
        name: document.getElementById("member-name").value,
        phone: document.getElementById("member-phone").value,
        comment: document.getElementById("member-comment").value,
        stepGoal: document.getElementById("member-step-goal").value,
        child: document.getElementById("member-child").value,
    };

    members.push(memberData);

    const membersList = document.getElementById("members-list");
    const listItem = document.createElement("li");
    listItem.textContent = memberData.name;

    const tooltipText = Object.entries(memberData)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");
    listItem.title = tooltipText;

    membersList.appendChild(listItem);

    members.forEach((member, index) => {
        configData[`m${index + 1}`] = member;
    });

    const configJson = JSON.stringify(configData, null, 2);
    console.log(configJson);


    const memberID = document.getElementById("member-id").value;

    sendConfigToDB(memberID, configJson);
});




document.querySelector(".view").addEventListener("click", async function () {
  const memberId = document.getElementById("member-id").value;

  try {
      const configInfo = await fetch(`https://vn.ugavel.com/ugasmartwatch/profiles?device_id=${memberId}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });

      if (configInfo.ok) {
          const data = await configInfo.text(); 
          console.log('Received data:', data);
      } else {
          console.error('Error fetching data:', response.status);
      }
  } catch (error) {
      console.error('Error while making the request:', error);
  }
});
