module Api
  module V1
    class ArticlesController < ApplicationController
      def index
        test = Carsanddriver.all
        puts test[0]
        articles = Article.all

        render json: ArticleSerializer.new(articles).serialized_json
      end

      def create
        newArticle = Article.new(article_params)

        if newArticle.save
          articles = Article.all
          render json: ArticleSerializer.new(articles).serialized_json
        else
          render json: { error: 'Could not save the article' }, status: 442
        end
      end

      private

      def article_params
        params.require(:article).permit(:text, :title)
      end
    end
  end
end
