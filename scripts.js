$("#workPage, #logo").click(function()
		{
			if(!isWorkCurrentPage)
			{
				isWorkCurrentPage = true;
				isAboutCurrentPage = false;
				$("#workPage").attr("class", "currentPage");
				$("#aboutPage").removeClass("currentPage");

				$("#about").fadeOut(500, function()
				{
					$("#work").fadeIn(500);
				});
			}
		});
