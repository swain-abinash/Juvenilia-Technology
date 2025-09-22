import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight, TrendingUp, Clock, Share2 } from 'lucide-react';
import { mockData } from '../../mock/NewsArticle';


const NewsArticlesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = selectedCategory === 'All' 
    ? mockData.articles 
    : mockData.articles.filter(article => article.category === selectedCategory);

  const searchFilteredArticles = searchQuery 
    ? filteredArticles.filter(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredArticles;

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Article */}
        <section className="mb-12">
          <div className="relative bg-gradient-to-r from-black to-gray-900 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <img
              src={mockData.featuredArticle.image}
              alt={mockData.featuredArticle.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-end p-8">
              <div className="text-white max-w-2xl">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {mockData.featuredArticle.category}
                  </span>
                  {mockData.featuredArticle.trending && (
                    <span className="flex items-center text-orange-400 text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Trending
                    </span>
                  )}
                </div>
                <h2 className="text-4xl font-bold mb-4 leading-tight">
                  {mockData.featuredArticle.title}
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  {mockData.featuredArticle.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-300">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {mockData.featuredArticle.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {mockData.featuredArticle.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {mockData.featuredArticle.readTime}
                    </span>
                  </div>
                  <button className="flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors font-medium">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Articles Section */}
          <div className="lg:col-span-3">
            {/* Search and Category Filter */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <h2 className="text-2xl font-bold text-black mb-4 sm:mb-0">Latest Articles</h2>
                
                {/* Search Bar */}
                <div className="relative w-full sm:w-80">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-3 text-black w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
              
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {mockData.categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      selectedCategory === category
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-black hover:bg-orange-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Results Info */}
            {searchQuery && (
              <div className="mb-6 text-gray-600">
                Found {searchFilteredArticles.length} articles for "{searchQuery}"
              </div>
            )}

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {searchFilteredArticles.length > 0 ? (
                searchFilteredArticles.map((article) => (
                  <article
                    key={article.id}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3 text-sm text-gray-500">
                          <span className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {article.author}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {article.readTime}
                          </span>
                        </div>
                        <button className="text-gray-400 hover:text-orange-500 transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                      <h3 className="text-xl font-bold text-black mb-3 leading-tight hover:text-orange-600 cursor-pointer transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {article.date}
                        </span>
                        <button className="text-orange-500 hover:text-orange-600 font-medium flex items-center transition-colors">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="col-span-2 text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search className="w-16 h-16 mx-auto mb-4" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                  <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
                </div>
              )}
            </div>

            {/* Load More Button */}
            {searchFilteredArticles.length > 0 && (
              <div className="text-center mt-12">
                <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Load More Articles
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Trending Topics */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-black mb-6 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-orange-500" />
                Trending Topics
              </h3>
              <div className="space-y-3">
                {mockData.trendingTopics.map((topic, index) => (
                  <div
                    key={topic}
                    className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-sm transition-shadow cursor-pointer group"
                  >
                    <span className="text-black font-medium group-hover:text-orange-600 transition-colors">
                      {topic}
                    </span>
                    <span className="text-orange-500 font-bold">#{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-white mb-8">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="mb-6 text-orange-100">
                Get the latest tech news and insights delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  Subscribe Now
                </button>
              </div>
            </div>

            {/* Popular Categories */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-black mb-6">Popular Categories</h3>
              <div className="space-y-3">
                {mockData.categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-50 text-black hover:bg-orange-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewsArticlesPage;