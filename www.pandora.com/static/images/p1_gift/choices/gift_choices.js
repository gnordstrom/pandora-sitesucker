
// this is the list of available images for the gift choices
// drop new ones in here and static push them out

// small_image = the image that appears in the scroller
// selected_image = the image that appears in the current selection
// lightbox_image = the image that appears in the example lightbox box
// print_image = the image that gets printed
// email_image = the image that gets emailed
// enabled - whether this image appears in the current set of choices -
// this flag allows us to keep halloween / seasonal images in the set,
// and have them still render properly later on, but without displaying
// them in the card catalog

var giftChoiceList = [

	
	{
        name : "Shiloh",
        title : "PANDORA",
        small_image : "/static/images/p1_gift/choices/Plus_Gift_Thumbnail_Shiloh.jpg",
        selected_image : "/static/images/p1_gift/choices/P1_Gift_CurrentlySelected_Shiloh.png",
        lightbox_image_print : "/static/images/p1_gift/choices/Plus_Gift_Print_Shiloh.jpg",
        lightbox_image_email : "/static/images/p1_gift/choices/Plus_Gift_Email_Shiloh.jpg",
        print_image : "/static/images/p1_gift/choices/Plus_Gift_Print_HiRes_Shiloh.jpg",
        email_image : "/static/images/p1_gift/choices/Plus_Gift_Email_Header_Shiloh.jpg",
        email_bg_color: "#e2e9f1",
        enabled: "true"
    },

    {
        name : "Slater",
        title : "PANDORA",
        small_image : "/static/images/p1_gift/choices/Plus_Gift_Thumbnail_Slater.jpg",
        selected_image : "/static/images/p1_gift/choices/P1_Gift_CurrentlySelected_Slater.png",
        lightbox_image_print : "/static/images/p1_gift/choices/Plus_Gift_Print_Slater.jpg",
        lightbox_image_email : "/static/images/p1_gift/choices/Plus_Gift_Email_Slater.jpg",
        print_image : "/static/images/p1_gift/choices/Plus_Gift_Print_HiRes_Slater.jpg",
        email_image : "/static/images/p1_gift/choices/Plus_Gift_Email_Header_Slater.jpg",
        email_bg_color: "#e2e9f1",
        enabled: "true"
    },
    {
        name : "Spirit",
        title : "PANDORA",
        small_image : "/static/images/p1_gift/choices/Plus_Gift_Thumbnail_Spirit.jpg",
        selected_image : "/static/images/p1_gift/choices/P1_Gift_CurrentlySelected_Spirit.png",
        lightbox_image_print : "/static/images/p1_gift/choices/Plus_Gift_Print_Spirit.jpg",
        lightbox_image_email : "/static/images/p1_gift/choices/Plus_Gift_Email_Spirit.jpg",
        print_image : "/static/images/p1_gift/choices/Plus_Gift_Print_HiRes_Spirit.jpg",
        email_image : "/static/images/p1_gift/choices/Plus_Gift_Email_Header_Spirit.jpg",
        email_bg_color: "#e2e9f1",
        enabled: "true"
    },
    {
        name : "Strider",
        title : "PANDORA",
        small_image : "/static/images/p1_gift/choices/Plus_Gift_Thumbnail_Strider.jpg",
        selected_image : "/static/images/p1_gift/choices/P1_Gift_CurrentlySelected_Strider.png",
        lightbox_image_print : "/static/images/p1_gift/choices/Plus_Gift_Print_Strider.jpg",
        lightbox_image_email : "/static/images/p1_gift/choices/Plus_Gift_Email_Strider.jpg",
        print_image : "/static/images/p1_gift/choices/Plus_Gift_Print_HiRes_Strider.jpg",
        email_image : "/static/images/p1_gift/choices/Plus_Gift_Email_Header_Strider.jpg",
        email_bg_color: "#e2e9f1",
        enabled: "true"
    },
    {
        name : "Spark",
        title : "PANDORA",
        small_image : "/static/images/p1_gift/choices/Plus_Gift_Thumbnail_Spark.jpg",
        selected_image : "/static/images/p1_gift/choices/P1_Gift_CurrentlySelected_Spark.png",
        lightbox_image_print : "/static/images/p1_gift/choices/Plus_Gift_Print_Spark.jpg",
        lightbox_image_email : "/static/images/p1_gift/choices/Plus_Gift_Email_Spark.jpg",
        print_image : "/static/images/p1_gift/choices/Plus_Gift_Print_HiRes_Spark.jpg",
        email_image : "/static/images/p1_gift/choices/Plus_Gift_Email_Header_Spark.jpg",
        email_bg_color: "#e2e9f1",
        enabled: "true"
    },
    {
        name : "Tattoo Mom",
        title : "MOM",
        small_image : "/static/images/p1_gift/choices/Plus_Gift_Thumbnail_TattooMom.jpg",
        selected_image : "/static/images/p1_gift/choices/Plus_Gift_CurrentlySelected_TattooMom.png",
        lightbox_image_print : "/static/images/p1_gift/choices/Plus_Gift_Print_MomTattoo.jpg",
        lightbox_image_email : "/static/images/p1_gift/choices/Plus_Gift_Email_TattooMom.jpg",
        print_image : "/static/images/p1_gift/choices/Plus_Gift_Print_HiRes_MomTattoo.jpg",
        email_image : "/static/images/p1_gift/choices/Plus_Gift_Email_Header_TattooMom.jpg",
        email_bg_color: "#e2e9f1",
        enabled: "true"
    },
    {
        name : "Grad",
        title : "CONGRATS",
        small_image : "/static/images/p1_gift/choices/Plus_Gift_Thumbnail_Grad.jpg",
        selected_image : "/static/images/p1_gift/choices/P1_Gift_CurrentlySelected_Grad.png",
        lightbox_image_print : "/static/images/p1_gift/choices/Plus_Gift_Print_Grad.jpg",
        lightbox_image_email : "/static/images/p1_gift/choices/Plus_Gift_Email_Grad.jpg",
        print_image : "/static/images/p1_gift/choices/Plus_Gift_Print_HiRes_Grad.jpg",
        email_image : "/static/images/p1_gift/choices/Plus_Gift_Email_Header_Grad.jpg",
        email_bg_color: "#e2e9f1",
        enabled: "true"
    },
    {
        name : "Pops",
        title : "POPS",
        small_image : "/static/images/p1_gift/choices/Plus_Gift_Thumbnail_Pops.jpg",
        selected_image : "/static/images/p1_gift/choices/P1_Gift_CurrentlySelected_Pops.png",
        lightbox_image_print : "/static/images/p1_gift/choices/Plus_Gift_Print_Pops.jpg",
        lightbox_image_email : "/static/images/p1_gift/choices/Plus_Gift_Email_Pops.jpg",
        print_image : "/static/images/p1_gift/choices/Plus_Gift_Print_HiRes_Pops.jpg",
        email_image : "/static/images/p1_gift/choices/Plus_Gift_Email_Header_Pops.jpg",
        email_bg_color: "#e2e9f1",
        enabled: "true"
    },
    {
        name : "Dude",
        title : "DUDE",
        small_image : "/static/images/p1_gift/choices/Plus_Gift_Thumbnail_Dude.jpg",
        selected_image : "/static/images/p1_gift/choices/P1_Gift_CurrentlySelected_Dude.png",
        lightbox_image_print : "/static/images/p1_gift/choices/Plus_Gift_Print_Dude.jpg",
        lightbox_image_email : "/static/images/p1_gift/choices/Plus_Gift_Email_Dude.jpg",
        print_image : "/static/images/p1_gift/choices/Plus_Gift_Print_HiRes_Dude.jpg",
        email_image : "/static/images/p1_gift/choices/Plus_Gift_Email_Header_Dude.jpg",
        email_bg_color: "#e2e9f1",
        enabled: "true"
    }
];



