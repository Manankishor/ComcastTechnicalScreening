
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({  name: 'orderBy' })

//Custom Pipe to sort data
export class OrderByPipe implements PipeTransform {

  transform(dataset: Array<any>, args?: any): any {
    if (dataset !== undefined) {
      return dataset.sort(function(a, b){
        if(a[args.column] < b[args.column]){
          return -1 * args.direction;
        }
        else if( a[args.column] > b[args.column]){
          return 1 * args.direction;
        }
        else{
          return 0;
        }
      });
    } else {
      return dataset;
    }
  };
}
