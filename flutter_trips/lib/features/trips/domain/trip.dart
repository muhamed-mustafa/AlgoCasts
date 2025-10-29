import 'dart:convert';

class Trip {
  final String id;
  final String title;
  final String location;
  final String coverImage;
  final int price;
  final String currency;
  final double rating;
  final int reviews;
  final int durationDays;
  final List<String> tags;

  const Trip({
    required this.id,
    required this.title,
    required this.location,
    required this.coverImage,
    required this.price,
    required this.currency,
    required this.rating,
    required this.reviews,
    required this.durationDays,
    required this.tags,
  });

  factory Trip.fromJson(Map<String, dynamic> json) {
    return Trip({
      id: json['id'] as String,
      title: json['title'] as String,
      location: json['location'] as String,
      coverImage: json['coverImage'] as String,
      price: (json['price'] as num).toInt(),
      currency: json['currency'] as String? ?? 'USD',
      rating: (json['rating'] as num).toDouble(),
      reviews: (json['reviews'] as num).toInt(),
      durationDays: (json['durationDays'] as num).toInt(),
      tags: (json['tags'] as List<dynamic>).map((e) => e.toString()).toList(),
    });
  }

  static List<Trip> listFromJsonString(String jsonString) {
    final dynamic decoded = json.decode(jsonString);
    if (decoded is List) {
      return decoded
          .cast<Map<String, dynamic>>()
          .map<Trip>((m) => Trip.fromJson(m))
          .toList(growable: false);
    }
    return const [];
  }
}
