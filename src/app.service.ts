import { Injectable } from '@nestjs/common';
import { CohereClient } from 'cohere-ai';

const cohere = new CohereClient({
  token: 'Mxo1La2K7NLmZGFDuY9D4Esh4LvpYLeUrpOejaiu',
});

// const ragWithDocsModel = cohere.chat('rag-with-docs');
// const trainingData = ['dataset1.json', 'dataset2.json'];
// ragWithDocsModel.createAndTrain({ dataset: trainingData });
// const response = ragWithDocsModel.generate('What is the capital of France?');

@Injectable()
export class AppService {
  async postProductInformation(trainingData: string): Promise<string> {
    const customerQuestion = 'how much can I buy this for?';
    const response = await cohere.generate({
      model: 'command',
      prompt:
        'I am providing you some training data and then a customer question, use the training data to learn about the product and then  answer the customers question using that data' +
        `Training Data: ${trainingData}` +
        `Customer Question: ${customerQuestion}`, // Combine user question with retrieved QA as context
      maxTokens: 50,
      temperature: 0.5,
    });
    console.log(response);

    let resp = '';
    response.generations.forEach((generation) => {
      resp += generation.text;
    });

    console.log(resp);

    return resp;
  }
}
