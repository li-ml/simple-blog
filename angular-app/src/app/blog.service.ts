import { Injectable } from '@angular/core';

import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import gql from 'graphql-tag';

import 'rxjs/add/operator/map';

const PostQuery = gql`
  query{
    allPosts {
      id
      title
      content
    }
  }
`;

@Injectable()
export class BlogService {
  constructor(private apollo: Apollo) { }

  all(){
    return this.apollo.watchQuery<any>({ query: PostQuery });
  }

}
