# BooksApp
This App Designed by using Reactjs,JS,Bootstrap and Html Css. (Api used in Backend =>GoogleBooksApi)
						
						       PROJECT NAME :- BOOKS APP
						**************************************

				". In this Project (Books App) shows All the Books that you want to  Show on the Screen of the Web."
				
				          Now I am explaining All the Features of the App that is Implemented on it.
				***********************************************************************
			1.Initially when the Page opens Shows a Navbar with the brand icon of book, by clicking on it goes to HomePage.(by default 					 	   Homepage opens when page loaded).
			2. Navbar have some Links , by clicking on it goes to that Books page.
			3.In the Home Page there is a Image of Books and a textField with Search button.
			4.By entering the name of the Book (which Book want to search) Press Search button that goes to all the book that the name you entered.
			5.On the Book Page there is a Left Panel having Some features of Searching the book according to your Choice.
			6.Left Panel have a Selection of Languages,Filtering,PrintType,and OrderBy options . by choosing any of then get desired Books.
			7.In the Right Side Showing the Image of Book With There Title, Name and Category also Have a Button to "Add to MyBooks".
			8.Clicking Add To MyBook button, that book added to my book, and Button changes to "Remove from MyBook",clicking on the get removes 			   from  myBook.
			9.There is a Link Of myBook in the Navbar also, by clicking it Shows All the books That has been added , initially it show No books Added.
			10.There is Link Of Setting on the Navbar, By clicking it goes to Setting  Page of the App, Here You get choice Your Filtering option that you 				   Want to Show on the left panel on books Page.	
			11.In Setting Page also a textField to enter number of books that you Want to show on One Page , max books that can show at a time is 40.
****************************************************************************************************************************************************
				Now I Am Explaing the Structure Of The App and Components that are using to make that App.
				*******************************************************************************
			"The Structure of the App is , There are using Some Components that are Listed below with there brief Details".

		1.MainComponent=> This is the main component of the App, here We Route all the Component to Switch according to the Link Clicked.
		2.FrontPage=>This Component render First Page of the Application, It renders Image and textfield with Button and some function to handle the button event.
		3.ShowBooks=>This Component render All the Books using get function of axios ,it takes Data from Google Books Api  that is using here to build the 			     App,All the Books Data Coming from Google Book API, What kind of request genrated to it , it give result in the Form of  Data, and we render 				     It to show on  Page usnig map function,A Left Panel is also Working there It generates all the queries according to option clicked 	and 			     Handled by Some Functions.
		4.Left Component=> This Component render the Left Panel All the radio buttons and Dropdown are renderd by Left component.
		5.MyBooks=>This Component render All the Books using map function That has been added to the MyBook on the Book page.
		6.Setting=>This Component render All the CheckBoxes for filtering the results and also a textField to handle the page on main Screen.
			 also there are some functions to handle all the Checkboxes and TextFields.	
		7.Navbar=> show navbar
				There Are Total 7 Componnents Used To Build That Web Aplication
****************************************************************************************************************************************************
						Testing Report
						*************
			All The Functionality working Properly, There Is No Any Error to be Removed .
****************************************************************************************************************************************************
						API USED
						*********
				1. Google Books API   =>https://www.googleapis.com
		       There are some Query Parameters with API Key that I have  tested on Postman it work with no any Bug. 
****************************************************************************************************************************************************