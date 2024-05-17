document.addEventListener('DOMContentLoaded', function () {
  // Existing cookieconsent configuration
  cookieconsent.run({
    "notice_banner_type": "simple",
    "consent_type": "express",
    "palette": "dark",
    "language": "cs",
    "page_load_consent_levels": ["strictly-necessary"],
    "notice_banner_reject_button_hide": false,
    "preferences_center_close_button_hide": false,
    "page_refresh_confirmation_buttons": false,
    "website_name": "RIZZ"
  });
  link.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default jump
    cookieconsent.openPreferencesCenter(); // Open preference center using cookieconsent
    });
    const link = document.getElementById("open_preferences_center");
  const modal = document.getElementById("cookie-preferences-modal"); // Assuming your modal has this ID

  link.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default jump
    modal.style.display = "block"; // Show the modal window
  });

});
