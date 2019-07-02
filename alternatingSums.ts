function alternatingSums(a: number[]): number[] {

  console.log(a);
  let teams: number[] = [];

  let sum1 = 0;
  let sum2 = 0;

  for( let i = 0; i <= a.length - 1; i++)
  {
    if( i == 0 || i%2 == 0)
    {
      
      console.log(a[i])
      sum1 += a[i]; 
    }
    else
    {
      console.log(a[i]);
      sum2 += a[i]; 
    }
  }
    console.log(sum1);
    console.log(sum2);

    teams.push(sum1);
    teams.push(sum2);
    return teams;
}

console.log(alternatingSums([50, 60, 60, 45, 70]))