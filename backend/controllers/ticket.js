 const db=require("../db/index");

async function ticket(req,res){
    const {busName,busDetails,Date,route,rating,availableSeats,price}=req.body;
    
    if(!busName||!busDetails||!Date||!route||! rating||!availableSeats||!price)
     return res.status(400).json({err:"fill all fields"})

  const ticketGenerate=await  db.create({
       busName: busName,
       busDetails: busDetails,
       Date:Date,
       route:route,
       rating:rating,
       availableSeats:availableSeats,
       price:price,
    })
    
    return res.json({ticketGenerate});
   
 
}


async function getTicket(req,res){
    const ticketDetails=await db.find();
    console.log(ticketDetails);

    return res.json({ticketDetails});

    

}


async function findRoute(req, res) {
  const { start, end, date } = req.query;

  if (!start || !end)
    return res.status(400).json({ err: "query params are empty" });

  const Tickets = await db.find({ Date: date });

  const Result = Tickets.filter(ticket => {
    const startingpoint = ticket.route.findIndex(route =>
      route.citname === start ||
      route.boardingPoints?.some(point => point.pointName === start)
    );

    if (startingpoint === -1) return false;

    const endingpoint = ticket.route
      .slice(startingpoint + 1)
      .findIndex(route =>
        route.citname === end ||
        route.boardingPoints?.some(point => point.pointName === end)
      );

    return endingpoint !== -1;
  });

  return res.json({ Result });
}







module.exports={ticket,getTicket,findRoute};