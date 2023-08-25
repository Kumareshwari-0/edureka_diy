function addittion(a)
{
    return function(b)
    {
        return function(c)
        {
            console.log(`a:${a} b:${b} C:${c}`);
            console.log(a+b+c);
        }
    }
}
addittion(10)(20)(30);