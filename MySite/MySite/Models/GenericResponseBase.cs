namespace MySite
{
    public abstract class GenericResponseBase
    {
        public bool IsSuccess { get; set; }
        public string ErrorMessage { get; set; }

        public static GenericResponse Fail(string ErrorMessage)
        {
            return new GenericResponse { IsSuccess = false, ErrorMessage = ErrorMessage };
        }
    }
}
