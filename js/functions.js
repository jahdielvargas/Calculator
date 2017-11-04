var input = $(".input-number"),
    btn = $(".btn"),
    sup = $(".super"),
    key, zero, vez, conti, pointer, a;
    origin();
$(document).on("keyup", function(e)
  {
    key = e.key;
    start();
  }
);
btn.on("click", function()
  {
    key = this.id;
    start();
  }
);

function start()
{
  if(key == "+" || key == "-" || key == "*" || key == "/" || key == "+-" || key == "x2" || key == "root" || key == "Enter" || key == "Backspace" || key == "C" )
  {
    functions();
  }
  if (input.val().length <= 17)
  {
    if (key >= 0 || key == "." )
    {
      if (conti)
      {
        input.val(key);
        conti = false;
        if(key ==".")
        {
          input.val("0.");
          pointer = false;
          zero = false;
        }
      }
      if (key == "." && pointer)
      {
        input.val( input.val() + "." );
        pointer = false;
        zero = false;
      }
      if (zero)
      {
        if (key != "0")
        {
          input.val(key);
          zero = false;
        }
      }
      else if(key >= 0)
      {
        input.val( input.val() + key );
      }
    }
  }
}
function functions()
{
  if ( key == "+" || key == "-" || key == "*" || key == "/")
  {
    operation = key;
    if (vez)
    {
      a = input.val();
      contin();
    }
    sup.text( a + " " + operation);
  }
  else if (key == "Enter" && operation != "")
  {
    roli();
  }
  else
  {
    switch (key) {
      case "Backspace":
        if( input.val()[input.val().length - 1] == ".")
        {
          pointer = true;
        }
        input.val(input.val().substring(0, input.val().length - 1));
        if( input.val() == "" || input.val() == "0")
        {
          origin();
        }
        if( input.val() == "")
        {
          origin();
        }
        break;
      case "C":
        origin();
        break;
      case "root":
        if (parseFloat(input.val()) >= 0)
        {
          input.val(Math.sqrt( parseFloat( input.val() ) ) )
          for (var i = 0; i < input.val().length; i++) {
            if (input.val()[i] == ".")
            {
              pointer = false;
            }
          }
        }
        else
        {
          input.val("ERROR");
          contin();
        }
        break;
      case "x2":
        input.val(parseFloat(input.val() * 2) );
        break;
      case "+-":
        input.val(parseFloat( input.val() ) * -1 );
        break;
    }
  }
}
function roli()
{
  sup.text(a + " " + operation + " " + input.val() + " =" );
  switch (operation) {
    case "+":
      input.val(parseFloat(a) + parseFloat(input.val()));
      break;
    case "-":
      input.val(parseFloat(a) - parseFloat(input.val()));
      break;
    case "*":
      input.val(parseFloat(a) * parseFloat(input.val()));
      break;
    case "/":
      input.val(parseFloat(a) / parseFloat(input.val()));
      break;
  }
  operation = "";
}
function origin()
{
  zero = true;
  pointer = true;
  vez = true;
  continua = false;
  sup.text("");
  input.val("0");
}
function contin()
{
  zero = true;
  pointer = true;
  conti = true;
}
