namespace MySite
{
    public class GenericResponse : GenericResponseBase
    {
        public static GenericResponse Success()
        {
            return new GenericResponse { IsSuccess = true };
        } 
    }

    public class GenericResponse<T>: GenericResponseBase
    { 
        public T Data { get; set; }

        public static GenericResponse<T> Success(T Data)
        {
            return new GenericResponse<T> { IsSuccess = true, Data = Data };
        }
    }
}
